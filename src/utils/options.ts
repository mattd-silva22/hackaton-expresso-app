import { MsgType, WhoType } from "../Providers/ChatbotContext";
import Fuse from "fuse.js";

const options = [
  {
    msg: "Olá",
  },
  {
    msg: "Sim algum agendamento para hoje?",
  },
  {
    msg: "Obrigado",
  },
  {
    msg: "15:00 por favor",
  },
];

export default function handleResponse(msg: MsgType) {
  const fuse = new Fuse(options, {
    keys: ["msg"],
  });

  const result = fuse.search(msg).map(({ item }) => item);

  if (msg.msg === "oi" || result[0]?.msg === "oi") {
    const resposta = {
      who: WhoType.server,
      msg: "Olá! Eu sou a Iasmim! Em que posso ajudar?",
    };

    return resposta;
  } else if (
    msg.msg === "Sim tenho algum agendamento para hoje?" ||
    result[0]?.msg === "Sim algum agendamento para hoje?"
  ) {
    const resposta = {
      who: WhoType.server,
      msg: "Sim. 08:30 - 02/07/2022 - Vapt Vupt Cidade Nova",
    };

    return resposta;
  } else if (msg.msg === "Obrigado" || result[0]?.msg === "Obrigado") {
    const resposta = {
      who: WhoType.server,
      msg: "Disponha!",
    };

    return resposta;
  } else if (
    msg.msg === "15:00 por favor" ||
    result[0]?.msg === "15:00 por favor"
  ) {
    const resposta = {
      who: WhoType.server,
      msg: "Pronto. Marcado para 15:00",
    };

    return resposta;
  } else {
    return {
      who: WhoType.server,
      msg: "Não entendi. Poderia escrever novamente?",
    };
  }
}
