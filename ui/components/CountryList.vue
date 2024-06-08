<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

let hasError = ref<boolean>(false);

const changeColor = () => {
  console.log("Button clicked");
  hasError.value = !hasError.value;
};

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log("The data ==>", event.data);
  // here save on DB
}
</script>

<template>
  <ul>
    <li>esto es una lista de datos</li>
  </ul>

  <p :class="{ 'bg-red-800': hasError }" class="font-bold">
    Este es un mensaje de prueba {{ hasError ? "true" : "false" }}
  </p>

  <UButton label="Change color" @click="changeColor" />

  <hr />

  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>

<style scoped></style>
