import Button from "@/components/button";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

const Write: NextPage = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <Layout canGoBack title="Write Post">
      <form className="space-y-4 p-4">
        <TextArea
          register={register("answer", { required: true, minLength: 5 })}
          required
          placeholder="Ask a question!"
        />
        <Button text="Submit" />
      </form>
    </Layout>
  );
};
export default Write;
