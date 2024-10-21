"use client";
import Link from "next/link";
import React from "react";
import Logo from "../../../../public/images/company_logo.png"
import Image from "next/image";

export default function VerifyPage() {
  //const [searchParams] = useSearchParams();
  //const token = searchParams.get("token");

  //const { isSuccess } = useSelector(authSelector);

  //const navigate = useNavigate();
  // dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(verifyEmail(token));
  // }, [token]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     setTimeout(() => {
  //       navigate("/signin");
  //     }, 3000);
  //   }
  // });
  return (
    <div
      style={{
        textAlign: "center",
        height: "100vh",
        backgroundColor: "#f2f5f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <table
        role="presentation"
        style={{
          borderCollapse: "collapse",
          backgroundColor: "#f2f5f8",
          width: "100%",
        }}
      >
        <tr>
          <td align="center">
            <Image src={Logo} height={50} width={200} alt="Fradragsjakt_logo" />
          </td>
        </tr>

        <tr>
          <td align="center">
            <div
              style={{
                maxWidth: "700px",
                margin: "30px",
                backgroundColor: "white",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  color: "#333333",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "34px",
                }}
              >
                Thank you for your trust in
                <span style={{ fontWeight: "600" }}> Fradragsjakt!</span>
              </h3>
              <div
                style={{
                  textAlign: "center",
                  color: "#5b6aff",
                  margin: "30px 0px",
                  lineHeight: "24px",
                }}
              >
                <h3 style={{ fontSize: "24px" }}>
                  Your email has been verified successfully
                </h3>
              </div>
              <h4
                style={{
                  color: "#333333",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Let&apos;s grow your business together.
              </h4>
              <Link href="/login">
                <button
                  style={{
                    height: "40px",
                    width: "146px",
                    backgroundColor: "#5b6aff",
                    border: "1px solid #5b6aff",
                    color: "white",
                    margin: "30px 0",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  Log in
                </button>
              </Link>
            </div>
          </td>
        </tr>
      </table>
         
    </div>
  );
}
