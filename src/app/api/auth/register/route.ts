import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import User from "@/server/db/models/user";

export async function POST(request: Request) {
  try {
     const { firstName, lastName, email, password, role } = await request.json();

     const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

     const hashedPassword = await hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", {error});
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
