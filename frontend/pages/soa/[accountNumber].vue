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
        <button class="text-white hover:underline">Logout</button>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="border-b">
      <div class="grid grid-cols-2 max-w-7xl mx-auto">
        <button class="px-6 py-3 text-center hover:bg-gray-100">
          Payment History
        </button>
        <button class="px-6 py-3 text-center hover:bg-gray-100">
          More Information
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto p-8">
      <h2 class="text-2xl font-bold text-center mb-8">STATEMENT OF ACCOUNT</h2>
      
      <div v-if="member" class="flex flex-col items-center">
        <!-- Profile Picture -->
        <img src="/default-profile.jpg" alt="Profile" class="w-40 h-40 object-cover mb-6" />
        
        <!-- Account Details Grid -->
        <div class="w-full grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
          <div class="border p-2">
            <p class="font-medium">Account Name</p>
            <p>{{ member.accountName }}</p>
          </div>
          <div class="border p-2">
            <p class="font-medium">Account No.</p>
            <p>{{ member.accountNumber }}</p>
          </div>
          
          <!-- Charges Grid -->
          <div class="border p-2">
            <p class="font-medium">Excess Minimum C.U.M per month</p>
            <p>₱0</p>
          </div>
          <div class="border p-2">
            <p class="font-medium">Excess Minimum C.U.M per month</p>
            <p>₱0</p>
          </div>
          <div class="border p-2">
            <p class="font-medium">Electricity Consumption</p>
            <p>₱0</p>
          </div>
          <div class="border p-2">
            <p class="font-medium">Connector Damage with unknown person</p>
            <p>₱0</p>
          </div>
          <div class="border p-2">
            <p class="font-medium">Looselevvy</p>
            <p>₱0</p>
          </div>
          <div class="border p-2">
            <p class="font-medium">Generator Consumption</p>
            <p>₱0</p>
          </div>
          <div class="border p-2">
            <p class="font-medium">Damages</p>
            <p>₱0</p>
          </div>
          <div class="border p-2">
            <p class="font-medium">Others</p>
            <p>₱0</p>
          </div>
          <div class="border p-2">
            <p class="font-medium">Business Permit</p>
            <p>₱0</p>
          </div>
          <div class="border p-2">
            <p class="font-medium">Association Fee</p>
            <p>₱0</p>
          </div>
          <div class="border p-2">
            <p class="font-medium">Penalty</p>
            <p>₱0</p>
          </div>
          <div class="border p-2">
            <p class="font-medium">Charges</p>
            <p>₱0</p>
          </div>
          <div class="border p-2">
            <p class="font-medium">Previous Balance</p>
            <p>₱0</p>
          </div>
          <div class="border p-2">
            <p class="font-medium">Total Bill</p>
            <p>₱0</p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-center gap-4">
          <button @click="$router.push('/dashboard')" class="px-8 py-2 bg-red-600 text-white font-medium">
            CANCEL
          </button>
          <button @click="$router.push(`/payment/${member.accountNumber}`)" class="px-8 py-2 bg-blue-600 text-white font-medium">
            PROCEED
          </button>
        </div>
      </div>

      <div v-else>
        <div class="text-center py-12">
          <p class="text-red-500 text-lg">No account found.</p>
          <button @click="$router.push('/dashboard')" class="mt-4 text-green-800 hover:underline">
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// Same member data as dashboard
const members = [
  { accountNumber: "100901", meterNumber: "50362", accountName: "Alamo, Marriel T.", balance: 800, date: "09-12-2025", status: "ACTIVE" },
  { accountNumber: "100293", meterNumber: "1994", accountName: "Allare, Myra T.", balance: 3000, date: "09-12-2025", status: "DISCONNECTED" },
  { accountNumber: "100255", meterNumber: "89", accountName: "Allare, Nariso T.", balance: 1480, date: "09-12-2025", status: "ACTIVE" },
  { accountNumber: "100236", meterNumber: "56488", accountName: "Amoy, Helen C.", balance: 1850, date: "09-12-2025", status: "ACTIVE" },
  { accountNumber: "100237", meterNumber: "56690", accountName: "Antiola, Enrique E.", balance: 180, date: "09-12-2025", status: "ACTIVE" },
  { accountNumber: "100245", meterNumber: "5133", accountName: "Antiola, Reynaldo I.", balance: 160, date: "09-12-2025", status: "ACTIVE" },
]

// Find the member by account number from URL
const member = members.find(m => m.accountNumber === route.params.accountNumber)
</script>
