import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

const EditProfile: NextPage = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <Layout canGoBack title="Edit Profile">
      <form className="space-y-4 px-4 py-10">
        <div className="flex items-center space-x-3">
          <div className="h-14 w-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Change
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <Input
          register={register("answer", { required: true, minLength: 5 })}
          required
          label="Email address"
          name="email"
          type="email"
        />
        <Input
          register={register("answer", { required: true, minLength: 5 })}
          required
          label="Phone number"
          name="phone"
          type="number"
          kind="phone"
        />
        <Button text="Update profile" />
      </form>
    </Layout>
  );
};
export default EditProfile;
