import { useToast } from "@chakra-ui/react";
import tw from "tailwind-styled-components";
import { useFormik } from "formik";
import { validationSchema, initialValues } from "./Validation";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import FormInput from "./FormInputs";

export default function FormWrapper() {
  const toast = useToast();
  const formRef = useRef();
  // handle onsubmit
  const onSubmit = () => {
    formik.resetForm();
    // Emailjs
    emailjs
      .sendForm(
        "service_3af467h",
        "template_zlyvtch",
        formRef.current,
        "epptficAfazT6NUZN"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    // form submit toast
    toast({
      position: "top",
      duration: 4000,
      render: () => (
        <Toast>
          <p>Thanks You</p>
          <p>Your message has been delivered successfully.</p>
        </Toast>
      ),
    });
  };
  // validation formikHook
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div className="w-full">
      <Form ref={formRef} onSubmit={formik.handleSubmit}>
        <FormInput formik={formik}></FormInput>
      </Form>
    </div>
  );
}
const Form = tw.form`
2xl:w-[75%]
sm:w-[80%]
w-[90%] 
mx-auto 
sm:space-y-6
space-y-3
max-[350px]:!text-xs
text-lg
[&>div>label]:text-[#bdbdbd]
overflow-hidden
`;

const Toast = tw.div`
bg-[#575757]
text-white
p-4
rounded-md
sm:w-auto
w-[80%]
mx-auto
mt-6
`;
