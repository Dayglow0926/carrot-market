import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface JobForm {
  department: string;
  wantToJoin: string;
  salary: string;
  introduce: string;
  dreams: string;
  email: string;
}

export default function JobApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobForm>();

  const [result, setResult] = useState<JobForm>();

  const onValid = (data: JobForm) => {
    setResult(data);
  };

  return (
    <div className="flex w-[100vw] items-center justify-center pt-8">
      <div className="w-[41%] rounded-xl border-2 border-b-8 border-r-8 border-black bg-red-100 p-8">
        <h1 className="mb-8 text-center text-xl font-bold">
          Job Application Form
        </h1>
        <form onSubmit={handleSubmit(onValid)}>
          <div className="mb-4 flex flex-col">
            <h2 className="mb-2 text-xs font-bold">
              What department do you want to work for?
              <span className="ml-1 text-[8px] text-red-600">
                {errors.department?.message}
              </span>
            </h2>
            <label className="mb-1 flex items-center text-[11px] font-bold">
              <input
                type="radio"
                className=" mr-1"
                value="Sales"
                {...register("department", { required: "*required" })}
              />
              Sales
            </label>
            <label className="mb-1 flex items-center text-[11px] font-bold">
              <input
                type="radio"
                className="mr-1"
                value="Marketing"
                {...register("department", { required: "*required" })}
              />
              Marketing
            </label>
            <label className="mb-1 flex items-center text-[11px] font-bold">
              <input
                type="radio"
                className="mr-1"
                value="Accounting"
                {...register("department", { required: "*required" })}
              />
              Accounting
            </label>
            <label className="mb-1 flex items-center text-[11px] font-bold">
              <input
                type="radio"
                className="mr-1"
                value="CustomerService"
                {...register("department", { required: "*required" })}
              />
              Customer Service
            </label>
          </div>
          <div className="mb-4 flex flex-col">
            <h2 className="mb-2 text-xs font-bold">
              Why do you want to join this company?
              <span className="ml-1 text-[8px] text-red-600">
                {errors.wantToJoin?.message}
              </span>
            </h2>
            <label className="mb-1 flex items-center text-[11px] font-bold">
              <input
                type="radio"
                className=" mr-1"
                value="1"
                {...register("wantToJoin", { required: "*required" })}
              />
              I want money!
            </label>
            <label className="mb-1 flex items-center text-[11px] font-bold">
              <input
                type="radio"
                className="mr-1"
                value="2"
                {...register("wantToJoin", { required: "*required" })}
              />
              I love this company
            </label>
            <label className="mb-1 flex items-center text-[11px] font-bold">
              <input
                type="radio"
                className="mr-1"
                value="3"
                {...register("wantToJoin", { required: "*required" })}
              />
              I want to learn
            </label>
            <label className="mb-1 flex items-center text-[11px] font-bold">
              <input
                type="radio"
                className="mr-1"
                value="4"
                {...register("wantToJoin", { required: "*required" })}
              />
              I don&apos;t know why
            </label>
          </div>
          <div className="mb-4 ">
            <h2 className="mb-2 text-xs font-bold">Salary</h2>
            <select className="w-full rounded-md border-2 border-black p-1 text-xs font-semibold">
              <option value="$50K">$50K</option>
              <option value="$100K">$100K</option>
              <option value="$150K">$150K</option>
              <option value="$200K">$200K</option>
            </select>
          </div>
          <div className="mb-4 ">
            <h2 className="mb-2 text-xs font-bold">Introduce yourself</h2>
            <input
              className="w-full rounded-md border-2 border-black p-1 text-xs font-semibold"
              type="text"
              {...register("introduce", {
                required: "Please write down your introduction.",
              })}
            />
            <span className="text-[8px] font-bold text-red-600">
              {errors.introduce?.message}
            </span>
          </div>
          <div className="mb-4 ">
            <h2 className="mb-2 text-xs font-bold">
              Tell us what your dreams are
            </h2>
            <textarea
              className="h-[80px] w-full resize-none rounded-md border-2 border-black p-1 text-xs font-semibold"
              {...register("dreams", {
                required: "Please tell us what your dreams are.",
                minLength: {
                  message: "Please write more than 10 characters.",
                  value: 10,
                },
              })}
            ></textarea>
            <span className="text-[8px] font-bold text-red-600">
              {errors.dreams?.message}
            </span>
          </div>
          <div className="mb-4 ">
            <h2 className="mb-2 text-xs font-bold">Email</h2>
            <input
              className="w-full rounded-md border-2 border-black p-1 text-xs font-semibold"
              type="email"
              {...register("email", {
                required: "Please write down your email.",
                validate: {
                  naverEmail: (value) =>
                    value.includes("@naver.com")
                      ? true
                      : "Only @naver is allowed.",
                },
              })}
            />
            <span className="text-[8px] font-bold text-red-600">
              {errors.email?.message}
            </span>
          </div>
          <div>
            <button className="mt-5 w-full rounded-lg border-2 border-b-4 border-r-4 border-black bg-yellow-400 p-3 text-xs font-bold">
              Give me this job
            </button>
          </div>
        </form>
        <div className="mt-3 break-words text-sm font-semibold">
          {JSON.stringify(result)}
        </div>
      </div>
    </div>
  );
}
