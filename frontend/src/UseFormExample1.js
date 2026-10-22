
import { useForm } from "react-hook-form";

export default function UseFormExample1() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onValidSubmit = (data) => {
        console.log("Form submitted", data);
    };

    return (
        <div className="container mt-4">
            <h2>React Hook Form Example</h2>

            <form onSubmit={handleSubmit(onValidSubmit)}>

                <div className="mb-3">
                    <input
                        className="form-control"
                        {...register("username", {
                            required: "Username is required!!!"
                        })}
                        placeholder="Enter username"
                    />

                    {errors.username && (
                        <p className="text-danger">
                            {errors.username.message}
                        </p>
                    )}
                </div>

                <div className="mb-3">
                    <input
                        className="form-control"
                        {...register("firstname", {
                            required: "Firstname is required!!!"
                        })}
                        placeholder="Enter first name"
                    />

                    {errors.firstname && (
                        <p className="text-danger">
                            {errors.firstname.message}
                        </p>
                    )}
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>

            </form>
        </div>
    );
}
