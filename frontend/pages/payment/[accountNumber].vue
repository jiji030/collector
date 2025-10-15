<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <div class="bg-green-800 p-4">
      <div class="flex justify-between items-center max-w-7xl mx-auto">
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="CHARMAFA Logo" class="h-8" />
          <div class="text-white">
            <h1 class="text-xl font-medium">CHARMAFA</h1>
            <p class="text-sm">A WATERWORKS SERVICE ASSOCIATION</p>
          </div>
        </div>
        <button @click="$router.push('/dashboard')" class="text-white hover:underline">Logout</button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-3xl mx-auto p-8">
      <h2 class="text-3xl font-bold text-center mb-8">PAYMENT INFORMATION</h2>
      
      <div v-if="member" class="bg-white border rounded-lg">
        <!-- Account Name -->
        <div class="p-4 border-b">
          <p class="text-lg">Account Name:</p>
          <p class="text-2xl">{{ member.accountName }}</p>
        </div>

        <!-- Payment Details -->
        <div class="grid grid-cols-2 p-4 gap-4 border-b">
          <div>
            <p class="text-lg">Total Bill:</p>
            <p class="text-2xl">₱{{ totalBill }}</p>
          </div>
          <div>
            <p class="text-lg">Cash:</p>
            <p class="text-2xl">₱{{ cashAmount }}</p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-center gap-4 p-6">
          <button @click="$router.back()" class="px-12 py-3 bg-red-500 text-white font-medium text-lg rounded">
            CANCEL
          </button>
          <button @click="printReceipt" class="px-12 py-3 bg-green-500 text-white font-medium text-lg rounded">
            PRINT
          </button>
        </div>
      </div>

      <!-- Hidden Receipt for Printing -->
      <div ref="receiptContent" class="hidden">
        <div class="receipt-header text-center">
          <p class="company-name">CHARMAFA</p>
          <p>CHARITO MAHAYAG FARMERS</p>
          <p>ASSOCIATION</p>
          <p class="small-text">Purok-2, Charito, Bayugan City</p>
          <p class="small-text">Agusan del Sur</p>
          <p class="small-text">TIN: 763-299-844-000</p>
          <p class="small-text">Tel: (0948) 949-10-36 / (0909) 231-02-44</p>
        </div>

        <div class="border-t">
          <div class="grid">
            <p>TS#:</p>
            <p>{{ tsNo }}</p>
          </div>
          <div class="grid">
            <p>Date:</p>
            <p>{{ readingDate }}</p>
          </div>
          <div class="grid">
            <p>Acct#:</p>
            <p>{{ member.accountNumber }}</p>
          </div>
          <div class="grid">
            <p>Meter#:</p>
            <p>{{ member.meterNumber }}</p>
          </div>
          <p>Name: {{ member.accountName }}</p>
          <div class="grid">
            <p>Prev:</p>
            <p>{{ previousReading }} CUM</p>
          </div>
          <div class="grid">
            <p>Pres:</p>
            <p>{{ presentReading }} CUM</p>
          </div>
          <div class="grid">
            <p>Free:</p>
            <p>{{ freeCUM }} CUM</p>
          </div>
        </div>

        <div class="border-t charges-list">
          <p class="text-center font-bold">CHARGES</p>
          <div class="grid">
            <p>Excess CUM:</p>
            <p class="amount">₱{{ charges.excess }}</p>
          </div>
          <div class="grid">
            <p>Electricity:</p>
            <p class="amount">₱{{ charges.electricity }}</p>
          </div>
          <div class="grid">
            <p>Generator:</p>
            <p class="amount">₱{{ charges.generator }}</p>
          </div>
          <div class="grid">
            <p>Conn.Damage:</p>
            <p class="amount">₱{{ charges.connectorDamage }}</p>
          </div>
          <div class="grid">
            <p>Damage:</p>
            <p class="amount">₱{{ charges.damage }}</p>
          </div>
          <div class="grid">
            <p>Others:</p>
            <p class="amount">₱{{ charges.others }}</p>
          </div>
          <div class="grid">
            <p>Penalty:</p>
            <p class="amount">₱{{ charges.penalty }}</p>
          </div>
        </div>

        <div class="border-t total-section">
          <div class="grid">
            <p>TOTAL:</p>
            <p class="amount">₱{{ totalBill }}</p>
          </div>
          <div class="grid">
            <p>CASH:</p>
            <p class="amount">₱{{ cashAmount }}</p>
          </div>
          <div class="grid">
            <p>CHANGE:</p>
            <p class="amount">₱{{ changeAmount }}</p>
          </div>
        </div>

        <div class="border-t text-center">
          <p>Collector: {{ collectorName }}</p>
          <p>-----------------------------</p>
          <p class="font-bold">THIS SERVES AS YOUR</p>
          <p class="font-bold">OFFICIAL RECEIPT</p>
          <p>THANK YOU!</p>
          <p class="small-text">{{ new Date().toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const receiptContent = ref(null)

// Sample data - replace with actual data from your backend
const member = ref({
  accountNumber: route.params.accountNumber,
  accountName: "Arian Jay Prisco",
  meterNumber: "1687"
})

// Payment details
const totalBill = ref(300)
const cashAmount = ref(500)
const changeAmount = computed(() => cashAmount.value - totalBill.value)

// Receipt details
const tsNo = ref("001-A")
const previousReading = ref(300)
const presentReading = ref(300)
const freeCUM = ref(5)
const readingDate = ref("Sep 13, 2025")
const collectorName = ref("Jessica A. Ruslan")

// Charges breakdown
const charges = ref({
  excess: 15,
  electricity: 5,
  generator: 5,
  connectorDamage: 5,
  damage: 5,
  others: 5,
  penalty: 0
})

const printReceipt = () => {
  const printWindow = window.open('', '', 'width=220,height=800') // 58mm = ~220px
  printWindow.document.write('<html><head><title>Receipt</title>')
  printWindow.document.write('<style>')
  printWindow.document.write(`
    @page {
      size: 58mm auto;
      margin: 0;
    }
    body {
      font-family: 'Arial Narrow', 'Franklin Gothic Medium Cond', sans-serif;
      width: 58mm;
      padding: 2mm;
      margin: 0;
      font-size: 8pt;
      line-height: 1.1;
    }
    .hidden { display: block !important; }
    p { 
      margin: 1mm 0;
      word-wrap: break-word;
      white-space: pre-wrap;
    }
    .text-center { text-align: center; }
    .border-t { 
      border-top: 1px dashed #000; 
      padding-top: 2mm; 
      margin-top: 2mm; 
    }
    .grid { 
      display: flex; 
      justify-content: space-between;
      align-items: baseline;
      gap: 2mm;
    }
    .grid p { margin: 0.5mm 0; }
    .grid p:first-child { 
      flex: 1;
      text-align: left;
    }
    .grid p:last-child { 
      flex: 0 0 auto;
      text-align: right;
    }
    .font-bold { font-weight: bold; }
    .company-name { 
      font-size: 10pt; 
      font-weight: bold;
      letter-spacing: 1px;
    }
    .receipt-header { 
      margin-bottom: 2mm;
      font-size: 7pt;
    }
    .receipt-header p {
      margin: 0.5mm 0;
    }
    .charges-list { margin: 2mm 0; }
    .charges-list .grid { margin: 0.5mm 0; }
    .total-section { 
      font-weight: bold;
      font-size: 9pt;
    }
    .small-text {
      font-size: 7pt;
    }
    .amount {
      font-family: 'Courier New', monospace;
    }
    @media print {
      html, body { width: 58mm; }
      .hidden { display: block !important; }
    }
  `)
  printWindow.document.write('</style></head><body>')
  printWindow.document.write(receiptContent.value.innerHTML)
  printWindow.document.write('</body></html>')
  printWindow.document.close()
  printWindow.print()
}
</script>
  &lt;div class="min-h-screen bg-white">
    &lt;!-- Header -->
    &lt;div class="bg-green-800 p-4">
      &lt;div class="flex justify-between items-center max-w-7xl mx-auto">
        &lt;div class="flex items-center gap-2">
          &lt;img src="/logo.png" alt="CHARMAFA Logo" class="h-8" />
          &lt;div class="text-white">
            &lt;h1 class="text-xl font-medium">CHARMAFA&lt;/h1>
            &lt;p class="text-sm">A WATERWORKS SERVICE ASSOCIATION&lt;/p>
          &lt;/div>
        &lt;/div>
        &lt;button @click="$router.push('/dashboard')" class="text-white hover:underline">Logout&lt;/button>
      &lt;/div>
    &lt;/div>

    &lt;!-- Main Content -->
    &lt;div class="max-w-3xl mx-auto p-8">
      &lt;h2 class="text-3xl font-bold text-center mb-8">PAYMENT INFORMATION&lt;/h2>
      
      &lt;div v-if="member" class="bg-white border rounded-lg">
        &lt;!-- Account Name -->
        &lt;div class="p-4 border-b">
          &lt;p class="text-lg font-medium">Account Name:&lt;/p>
          &lt;p class="text-2xl">{{ member.accountName }}&lt;/p>
        &lt;/div>

        &lt;!-- Payment Details -->
        &lt;div class="grid grid-cols-2 p-4 gap-4 border-b">
          &lt;div>
            &lt;p class="text-lg font-medium">Total Bill:&lt;/p>
            &lt;p class="text-2xl">₱{{ totalBill }}&lt;/p>
          &lt;/div>
          &lt;div>
            &lt;p class="text-lg font-medium">Cash:&lt;/p>
            &lt;p class="text-2xl">₱{{ cashAmount }}&lt;/p>
          &lt;/div>
        &lt;/div>

        &lt;!-- Action Buttons -->
        &lt;div class="flex justify-center gap-4 p-6">
          &lt;button @click="$router.back()" class="px-12 py-3 bg-red-600 text-white font-medium text-lg rounded">
            CANCEL
          &lt;/button>
          &lt;button @click="printReceipt" class="px-12 py-3 bg-green-600 text-white font-medium text-lg rounded">
            PRINT
          &lt;/button>
        &lt;/div>
      &lt;/div>

      &lt;!-- Hidden Receipt for Printing -->
      &lt;div ref="receiptContent" class="hidden">
        &lt;div class="p-8">
          &lt;div class="text-center mb-6">
            &lt;h3 class="font-bold">CHARITO MAHAYAG FARMERS ASSOCIATION&lt;/h3>
            &lt;p>(CHARMAFA)&lt;/p>
            &lt;p>Purok-2, Charito, Bayugan City, Agusan del Sur&lt;/p>
            &lt;p>Tin No.: 763-299-844-000&lt;/p>
            &lt;p>Hotline Nos: (0948) 949-10-36 / (0909) 231-02-44&lt;/p>
          &lt;/div>

          &lt;div class="grid grid-cols-2 gap-4 mb-6">
            &lt;div>
              &lt;p>&lt;strong>TS No:&lt;/strong> 001-A&lt;/p>
              &lt;p>&lt;strong>Account No:&lt;/strong> {{ member.accountNumber }}&lt;/p>
              &lt;p>&lt;strong>Consumer's Name:&lt;/strong> {{ member.accountName }}&lt;/p>
            &lt;/div>
            &lt;div>
              &lt;p>&lt;strong>Meter No:&lt;/strong> {{ member.meterNumber }}&lt;/p>
              &lt;p>&lt;strong>READING DATE:&lt;/strong> {{ currentDate }}&lt;/p>
            &lt;/div>
          &lt;/div>

          &lt;div class="border-t pt-4 mb-6">
            &lt;h4 class="font-bold mb-2">CHARGES BREAKDOWN:&lt;/h4>
            &lt;div class="grid grid-cols-2 gap-2">
              &lt;p>Excess Minimum C.U.M per month:&lt;/p>&lt;p>₱15&lt;/p>
              &lt;p>Electricity Consumption:&lt;/p>&lt;p>₱5&lt;/p>
              &lt;p>Generator Consumption:&lt;/p>&lt;p>₱5&lt;/p>
              &lt;p>Connector Damage:&lt;/p>&lt;p>₱5&lt;/p>
              &lt;p>Damage:&lt;/p>&lt;p>₱5&lt;/p>
              &lt;p>Others:&lt;/p>&lt;p>₱5&lt;/p>
            &lt;/div>
          &lt;/div>

          &lt;div class="border-t pt-4">
            &lt;p>&lt;strong>Cash Amount:&lt;/strong> ₱{{ cashAmount }}&lt;/p>
            &lt;p>&lt;strong>Change Amount:&lt;/strong> ₱{{ changeAmount }}&lt;/p>
            &lt;p>&lt;strong>COLLECTOR:&lt;/strong> Jessica A. Ruslan&lt;/p>
            &lt;p class="text-center mt-4 font-bold">THIS SERVES AS YOUR OFFICIAL RECEIPT THANK YOU!&lt;/p>
          &lt;/div>
        &lt;/div>
      &lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/template>

&lt;script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const receiptContent = ref(null)

// Mock data - replace with actual data fetching
const member = ref({
  accountNumber: route.params.accountNumber,
  accountName: "Arian Jay Prisco",
  meterNumber: "1687",
})

const totalBill = ref(300)
const cashAmount = ref(500)
const changeAmount = computed(() => cashAmount.value - totalBill.value)
const currentDate = ref(new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}))

const printReceipt = () => {
  const printWindow = window.open('', '', 'width=800,height=600')
  printWindow.document.write('&lt;html>&lt;head>&lt;title>Receipt&lt;/title>')
  printWindow.document.write('&lt;style>')
  printWindow.document.write(`
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .hidden { display: block !important; }
  `)
  printWindow.document.write('&lt;/style>&lt;/head>&lt;body>')
  printWindow.document.write(receiptContent.value.innerHTML)
  printWindow.document.write('&lt;/body>&lt;/html>')
  printWindow.document.close()
  printWindow.print()
}
&lt;/script>