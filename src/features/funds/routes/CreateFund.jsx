import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ICONS } from "@/constants";
import { Form } from "@/components/Form/Form";
import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { FormLayout } from "@/components/Layout";
import { ListBoxInput } from "@/components/Form/ListBoxInput";
import { IconFromText } from "@/components/Misc/IconFromText/IconFromText";

import { createFund } from "../api/createFund";
import { useCreateFund } from "../hooks/useCreateFund";

const CreateFund = () => {
  const createFundMutation = useCreateFund();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [error, setError] = useState("");
  const [icon, setIcon] = useState(Object.values(ICONS)[0]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleCreateFund = ({ name }) => {
    setIsFormLoading(true);
    createFundMutation
      .mutateAsync({ name, icon })
      .then(() => navigate("/funds"))
      .catch(() => {
        setError("Fund name already exists");
      })
      .finally(() => {
        setIsFormLoading(false);
      });
  };

  return (
    <FormLayout title="Create Fund">
      <Form onSubmit={handleSubmit(handleCreateFund)} error={error}>
        <div className="flex w-full gap-2">
          <div className="flex flex-col w-3/4">
            <Input
              label="Name"
              placeholder="Name"
              register={register("name", {
                required: "Fund name is required",
              })}
              error={errors.name?.message}
            />
          </div>
          <div
            className={`${
              errors.name && "pb-5"
            } flex flex-col flex-grow h-fill justify-end`}
          >
            <ListBoxInput
              label="Icon"
              selected={icon}
              setSelected={setIcon}
              choices={Object.values(ICONS)}
              renderItem={(item) => (
                <IconFromText text={item} className="h-6" />
              )}
            />
          </div>
        </div>
        <Button className="mt-5" text="Create" disabled={isFormLoading} />
      </Form>
    </FormLayout>
  );
};

export default CreateFund;
