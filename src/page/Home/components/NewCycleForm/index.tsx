import { useContext } from "react";

import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../context/CyclesContext";
import { FormCotainer, MinutsAmountInput, TaskInput } from "./style";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormCotainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestion"
        placeholder="Nome do projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />
      <datalist id="task-suggestion">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 3" />
        <option value="banana" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutsAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormCotainer>
  );
}
