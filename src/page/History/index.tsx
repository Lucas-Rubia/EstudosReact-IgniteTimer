import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { useContext } from "react";
import { CyclesContext } from "../../context/CyclesContext";
import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>Meu historíco</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th> Tarefa</th>
              <th> Duração</th>
              <th> inicio</th>
              <th> Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount}</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishDate && (
                      <Status statusColor="green"> Concluido </Status>
                    )}

                    {cycle.interruptedDate && (
                      <Status statusColor="red"> Interrompido </Status>
                    )}

                    {!cycle.finishDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow"> Em andamento </Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
