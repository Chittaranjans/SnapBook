import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignupValidation } from "@/lib/validation/index.ts";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { createUserAccount } from "@/lib/appwrite/api";

const SigninForm = () => {
  const isLoding = false;
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const newUser = await createUserAccount(values);
    console.log(newUser);
  }

  return (
    <Form {...form}>
      <img
        className="w-10 h-15 mb-4"
        src="/public/assets/5882207_linux_logo_operating_system_icon.png"
        alt="logo"
      />
      <h1 className="text-2xl font-bold text-center text-pink-800">Sign up</h1>
      <p className="text-light-3 small-medium md:base-regular mt-2">
        To use SnapBook enter your details
      </p>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-5 w-3/5 mt-4 border-t border-b border-light-3 pt-5 pb-5 border-dotted border-cyan-900"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Connect#Github"
                  type="text"
                  className="h-12  border-2 border-pink-300 rounded hover:rounded-lg p-2 rounded-xl placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>userName</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="h-12 border-2 border-pink-300 rounded hover:rounded-lg p-2 rounded-xl placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email address"
                  type="email"
                  className="h-12 border-2 border-pink-300 rounded hover:rounded-lg p-2 rounded-xl focus:outline-none  "
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  type="Password"
                  className="h-12 border-2 border-pink-300 rounded hover:rounded-lg p-2 rounded-xl placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className=" rounded hover:rounded-lg p-5 rounded-xl focus:outline-pink-800 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 bg-pink-600 text-light-4 hover:bg-light-4 hover:text-black"
        >
          {isLoding ? (
            <div className="flex-center gap-2">Loding...</div>
          ) : (
            "Sign up"
          )}
        </Button>
      </form>
      <p className="text-small-regualar text-black text-center mt-2">
        Already have an account?{" "}
        <a href="/signin" className="text-pink-800">
          Login
        </a>
      </p>
    </Form>
  );
};

export default SigninForm;
