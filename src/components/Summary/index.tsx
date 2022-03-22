import incomeImg from '../../assets/income.svg'; 
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles"

export const Summary = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'receita') {
      acc.receita += transaction.amount;
      acc.total += transaction.amount;
    }
    else {
      acc.despesa += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;

  }, {
    receita: 0,
    despesa: 0,
    total: 0
  })
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.receita)}</strong>
      </div>

      <div>
        <header>
          <p>Despesas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>{Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.despesa)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Receita Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.total)}</strong>
      </div>
    </Container>
  )
}
