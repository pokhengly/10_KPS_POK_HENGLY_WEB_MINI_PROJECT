"use server";

import {registerService} from "@/services/auth.service";

export default async function signupAction(formRegister) {
    const newUser = {
        firstname: formRegister.firstname,
        lastname: formRegister.lastname,
        gender: formRegister.gender,
        email: formRegister.email,
        password: formRegister.password
    };
    await registerService(newUser);
}
