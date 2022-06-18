import { MsgType, WhoType } from "../Providers/ChatbotContext";
import Fuse from "fuse.js";

const options = [
  {
    msg: "Olá",
  },
  {
    msg: "gostaria de marcar um atendimento no vaptvupt",
  },
  {
    msg: "sexta",
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
  console.log(result);

  if (msg.msg === "oi" || result[0]?.msg === "oi") {
    const resposta = {
      who: WhoType.server,
      msg: "Olá! Eu sou a Iasmim! Em que posso ajudar?",
    };

    return resposta;
  } else if (
    msg.msg === "gostaria de marcar um atendimento no vaptvupt" ||
    result[0]?.msg === "gostaria de marcar um atendimento no vaptvupt"
  ) {
    const resposta = {
      who: WhoType.server,
      msg: "Temos horarios disponiveis para terça, quinta e sexta",
    };

    return resposta;
  } else if (msg.msg === "sexta" || result[0]?.msg === "sexta") {
    const resposta = {
      who: WhoType.server,
      msg: "Temos horario para 15:00, 15:30, 17:00",
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
