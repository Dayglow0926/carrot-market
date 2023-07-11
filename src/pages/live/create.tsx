import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

const Create: NextPage = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <Layout canGoBack title="Go Live">
      <form className=" space-y-4 px-4 py-10">
        <Input
          register={register("answer", { required: true, minLength: 5 })}
          required
          label="Name"
          name="name"
          type="text"
        />
        <Input
          register={register("answer", { required: true, minLength: 5 })}
          required
          label="Price"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea
          register={register("answer", { required: true, minLength: 5 })}
          name="description"
          label="Description"
        />
        <Button text="Go live" />
      </form>
    </Layout>
  );
};
export default Create;
