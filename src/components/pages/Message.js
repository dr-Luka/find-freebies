import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import GoBack from "../layout/BackButton";

const schema = yup.object().shape({
  author: yup
    .string()
    .required("Please enter your name!")
    .min(1, "Name must be at least 1 characters!"),
  email: yup
    .string()
    .required("Please enter an email address!")
    .email("Please enter a valid email address!"),
  message: yup
    .string()
    .required("Please enter your message!")
    .min(10, "The message must be at least 10 characters!"),
});

export default function Message() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    navigate("/sent");
  }

  return (
    <>
      <GoBack />
      <form onSubmit={handleSubmit(onSubmit)} className="messageForm">
        <h2>Send Message</h2>
        <fieldset disabled={false} className="messageFieldset">
          <div className="messageForm__info">
            <div>
              <input
                {...register("author")}
                placeholder="Name"
                className="nameInput"
              />
              {errors.author && (
                <span className="formError">{errors.author.message}</span>
              )}
            </div>
            <div>
              <input
                {...register("email")}
                placeholder="Email"
                className="emailInput"
              />
              {errors.email && (
                <span className="formError">{errors.email.message}</span>
              )}
            </div>
          </div>

          <textarea
            {...register("message")}
            placeholder="Message"
            className="messageInput"
          />
          {errors.message && (
            <span className="formError">{errors.message.message}</span>
          )}
          <div className="profile__messageButton">
            <button className="button button--view">Send</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
