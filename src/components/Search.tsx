'use client';

import { useForm } from 'react-hook-form';
// import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from './ui/input';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
    },
  });

  //   const onSubmit = (values:string) => {
  //     console.log(values);
  //   };

  return (
    <form>
      <div className="relative">
        <FaSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search products..."
          className="w-full appearance-none bg-background pl-8 shadow-none  "
          {...form.register('search')}
        />
      </div>
    </form>
  );
}
