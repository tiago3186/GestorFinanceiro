let saldoAtual = 0;

function inserir() {
    const saldo = parseFloat(document.getElementById('saldo').value);
    const tipo = document.getElementById('tipo').value;
    const descricao = document.getElementById('descricao').value;
  
    // Mudança na forma de obter a data
    const dataInput = document.getElementById('data').value;
    const data = new Date(dataInput);
    const dataFormatada = `${data.getDate().toString().padStart(2, '0')} - ${(
      data.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')} - ${data.getFullYear()}`;
  
    const valor = parseFloat(document.getElementById('valor').value);
  
    const listaTransacoes = document.getElementById('lista-transacoes');
    const novoItem = document.createElement('li');
  
    let novoSaldo;
    let classe;
  
    if (tipo === 'receita') {
      novoSaldo = saldoAtual + valor;
      saldoAtual = novoSaldo;
      classe = 'receita';
    } else {
      novoSaldo = saldoAtual - valor;
      saldoAtual = novoSaldo;
      classe = 'despesa';
    }
  
    novoItem.classList.add(classe);
  
    // Mudança na forma de adicionar a data ao item da lista de transações
    novoItem.innerHTML = `
      <span>${descricao}</span>
      <span>${dataFormatada}</span>
      <span>${valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}</span>
    `;
    listaTransacoes.appendChild(novoItem);
  
    document.getElementById('saldo-atual').textContent = `Saldo atual: ${saldoAtual.toLocaleString(
      'pt-BR',
      { style: 'currency', currency: 'BRL' },
    )}`;
  
    document.getElementById('saldo').value = '';
    document.getElementById('tipo').value = 'receita';
    document.getElementById('descricao').value = '';
  
    // Mudança na forma de limpar o campo de data
    document.getElementById('data').value = '';
    document.getElementById('valor').value = '';
  }
  