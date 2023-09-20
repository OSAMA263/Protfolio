import {
  FormControl,
  FormHelperText,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { validationSchema, initialValues } from "./Validation";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Form() {
  const toast = useToast();
  const form = useRef();

  const onSubmit = () => {
    resetForm();
    // Emailjs
    emailjs
      .sendForm(
        "service_3af467h",
        "template_zlyvtch",
        form.current,
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
          <p>Your massage has been delivered successfully.</p>
        </Toast>
      ),
    });
  };

  // validation formikHook
  const {
    resetForm,
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="w-full">
      <FormWrapper ref={form} onSubmit={handleSubmit}>
        <FormControl {...formAnimation} custom={0} as={motion.div}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <input
            className={`max-sm:p-2 ${
              errors.name && touched.name && "invalid-input"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            type="text"
            id="name"
            name="name"
          />
          <FormHelperText>
            <p className="text-[#595e69] text-[10px">
              {errors.name && touched.name && errors.name}
            </p>
          </FormHelperText>
        </FormControl>

        <FormControl {...formAnimation} custom={1} as={motion.div}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <input
            className={`max-sm:p-2 ${
              errors.email && touched.email && "invalid-input"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            type="email"
            id="email"
            name="email"
          />
          <FormHelperText>
            <p className="text-[#595e69] text-[10px">
              {errors.email && touched.email && errors.email}
            </p>
          </FormHelperText>
        </FormControl>

        <FormControl {...formAnimation} custom={2} as={motion.div}>
          <FormLabel htmlFor="massage">Your Massage</FormLabel>
          <motion.textarea
            className={`max-sm:p-2 ${
              errors.massage && touched.massage && "invalid-input"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.massage}
            id="massage"
            name="massage"
            rows="6"
          ></motion.textarea>
          <FormHelperText>
            <p className="text-[#595e69] text-[10px">
              {errors.massage && touched.massage && errors.massage}
            </p>
          </FormHelperText>
        </FormControl>
        <Submit
          {...formAnimation}
          custom={3}
          id="submit"
          value="send"
          type="submit"
        >
          submit
        </Submit>
      </FormWrapper>
    </div>
  );
}

const formAnimation = {
  initial: { x: "-98%", opacity: 0 },
  whileInView: (i) => ({
    x: "0%",
    opacity: 1,
    transition: {
      delay: 0.1 * i + 3.4,
      duration: 0.7,
      type: "tween",
    },
  }),
  viewport: { once: true },
};

const FormWrapper = tw.form`
2xl:w-[75%]
sm:w-[80%]
w-[90%] 
mx-auto 
sm:space-y-6
space-y-3
[&>div>label]:text-[#bdbdbd]
overflow-hidden
`;

const Submit = tw(motion.button)`
overflow-hidden
relative
bg-[#1f1f1f]
py-3 
md:w-fit
w-full
px-10
text-lg
border-[1px]
border-transparent
hover:text-[#0aff9d]
hover:border-[#0aff9dab]
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
