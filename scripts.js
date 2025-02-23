// objeto do usuário
const usuario = { nome: "Caio", matricula: "271", pendencia: false, acessibilidade: true };

// lista objetos de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false, reserva: null, entrega: null },
  { id: 2, formato: "padrao", status: true, acessivel: false, reserva: null, entrega: null },
  { id: 3, formato: "padrao", status: true, acessivel: false, reserva: null, entrega: null },
  { id: 4, formato: "padrao", status: false, acessivel: true, reserva: null, entrega: null },
  { id: 5, formato: "padrao", status: false, acessivel: true, reserva: null, entrega: null },
  { id: 6, formato: "duplo", status: true, acessivel: true, reserva: null, entrega: null },
  { id: 7, formato: "duplo", status: false, acessivel: true, reserva: null, entrega: null },
  { id: 8, formato: "duplo", status: false, acessivel: true, reserva: null, entrega: null },  
];

// função para reserva do armário, incluindo as melhorias.
function reservarArmario() {
  let tipoSelecionado = document.getElementById("tipoArmario").value;
  let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status === true && usuario.acessibilidade === a.acessivel);

  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }

  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
  let armarioEmprestado = armarios.find(armario => armario.id === armarioSorteado.id);
  armarioEmprestado.status = false;
  
  // Registrar data e hora da reserva
  let dataReserva = new Date();
  armarioEmprestado.reserva = dataReserva.toLocaleString();

  // Calcular data e hora de entrega (24h depois)
  let dataEntrega = new Date(dataReserva);
  dataEntrega.setHours(dataEntrega.getHours() + 24);
  armarioEmprestado.entrega = dataEntrega.toLocaleString();
  
  usuario.pendencia = true;
  
  document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso!\nData e hora da entrega: ${armarioEmprestado.entrega}`;

  console.log(usuario);
  console.log(armarios);
}
