<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses :income="+income" :expenses="+expenses" />
    <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted"/>
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Balance from './components/Balance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'
import {useToast} from 'vue-toastification'

import { ref, computed, onMounted } from 'vue'

const toast = useToast()

const transactions = ref([
  // { id: 1, text: 'Flower', amount: -19.99 },
  // { id: 2, text: 'Salary', amount: 299.97 },
  // { id: 3, text: 'Book', amount: -10 },
  // { id: 4, text: 'Camera', amount: 150 },
])

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'))

  if(savedTransactions) {
    transactions.value = savedTransactions
  }
})

// get total
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount
  }, 0)
})

// get income
const income = computed(() => {
  return transactions.value
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => {
      return acc + t.amount
    }, 0)
    .toFixed(2)
})

// get expenses
const expenses = computed(() => {
  return transactions.value
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => {
      return acc + t.amount
    }, 0)
    .toFixed(2)
})

//add transaction

const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  })

  saveTransactionsToLocalStorage()

  toast.success('Transaction added')
}

const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter((t) => t.id !== id)

  saveTransactionsToLocalStorage()

  toast.success('Transaction deleted')
}

// generate unique id
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000)
}

// save to Local Storage
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
</script>

<style scoped></style>
