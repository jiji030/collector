<template>
  <div class="bg-white min-h-screen">
    <!-- Green Header Bar with Logo and Title -->
    <div class="flex items-center justify-between bg-green-800 px-8 py-5">
      <div class="flex items-center">
        <img src="/logo.png" alt="CHARMAFA Logo" class="w-20 h-20 mr-5 drop-shadow-lg" />
        <div class="flex flex-col justify-center">
          <h1 class="text-3xl font-extrabold text-white leading-tight mb-1 drop-shadow-lg">CHARMAFA</h1>
          <p class="text-base font-medium text-white tracking-wide drop-shadow">A WATERWORKS SERVICE ASSOCIATION</p>
        </div>
      </div>
      <div>
        <button
          class="text-white font-medium bg-green-900 px-5 py-2 rounded-lg shadow hover:bg-green-700 transition"
          @click="logout"
        >Logout</button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="px-8 py-6">
      <!-- Search & Scan & Sort By (aligned in one row) -->
      <div class="flex items-center mb-4">
        <input
          type="text"
          v-model="search"
          placeholder="Search Name, Barcode, account number, meter #"
          class="w-full max-w-xl px-4 py-2 border border-black rounded"
        />
        <button class="ml-2 px-4 py-2 border border-black rounded bg-white">Click here to Scan Code</button>
        <!-- Sort By (left side of Scan Code button, no label, default option as "Sort By") -->
        <div class="relative w-64 ml-2">
          <select v-model="sortBy" class="border border-black rounded px-3 py-2 w-full">
            <option disabled value="">Sort By</option>
            <option value="accountNumber">Account No.</option>
            <option value="accountName">Account Name</option>
            <option value="status">Status</option>
            <option value="balance">Balance</option>
            <option value="date">Date</option>
          </select>
        </div>
        <div class="ml-2 flex items-center">
          <label class="mr-2 flex items-center text-black">
            <input type="radio" value="asc" v-model="sortOrder" class="mr-1" /> Ascending
          </label>
          <label class="flex items-center text-black">
            <input type="radio" value="desc" v-model="sortOrder" class="mr-1" /> Descending
          </label>
        </div>
      </div>

      <!-- Member's List Table -->
      <div class="bg-white rounded shadow overflow-x-auto">
        <h3 class="text-lg font-semibold px-4 py-3">MEMBER'S LIST</h3>
        <table class="min-w-full border-black border">
          <thead>
            <tr class="bg-green-200">
              <th class="px-2 py-2 border-black border">No.</th>
              <th class="px-2 py-2 border-black border">Account No.</th>
              <th class="px-2 py-2 border-black border">Meter No.</th>
              <th class="px-2 py-2 border-black border">Account Name</th>
              <th class="px-2 py-2 border-black border">BALANCE</th>
              <th class="px-2 py-2 border-black border">Date</th>
              <th class="px-2 py-2 border-black border">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(member, idx) in sortedMembers"
              :key="member.accountNumber"
              class="hover:bg-gray-100 cursor-pointer"
              @click="goToSOA(member)"
            >
              <td class="px-2 py-2 border-black border text-center">{{ idx + 1 }}</td>
              <td class="px-2 py-2 border-black border text-center">{{ member.accountNumber }}</td>
              <td class="px-2 py-2 border-black border text-center">{{ member.meterNumber }}</td>
              <td class="px-2 py-2 border-black border">{{ member.accountName }}</td>
              <td class="px-2 py-2 border-black border text-right">₱ {{ member.balance.toLocaleString() }}</td>
              <td class="px-2 py-2 border-black border text-center">{{ member.date }}</td>
              <td class="px-2 py-2 border-black border text-center">{{ member.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      sortBy: "",
      sortOrder: "asc",
      members: [
        { accountNumber: "100901", meterNumber: "50362", accountName: "Alamo, Marriel T.", balance: 800, date: "09-12-2025", status: "ACTIVE" },
        { accountNumber: "100293", meterNumber: "1994", accountName: "Allare, Myra T.", balance: 3000, date: "09-12-2025", status: "DISCONNECTED" },
        { accountNumber: "100255", meterNumber: "89", accountName: "Allare, Nariso T.", balance: 1480, date: "09-12-2025", status: "ACTIVE" },
        { accountNumber: "100236", meterNumber: "56488", accountName: "Amoy, Helen C.", balance: 1850, date: "09-12-2025", status: "ACTIVE" },
        { accountNumber: "100237", meterNumber: "56690", accountName: "Antiola, Enrique E.", balance: 180, date: "09-12-2025", status: "ACTIVE" },
        { accountNumber: "100245", meterNumber: "5133", accountName: "Antiola, Reynaldo I.", balance: 160, date: "09-12-2025", status: "ACTIVE" },
      ],
    };
  },
  computed: {
    filteredMembers() {
      if (!this.search) return this.members;
      const s = this.search.toLowerCase();
      return this.members.filter(m =>
        m.accountNumber.includes(s) ||
        m.meterNumber.includes(s) ||
        m.accountName.toLowerCase().includes(s)
      );
    },
    sortedMembers() {
      let sorted = [...this.filteredMembers];
      const key = this.sortBy;
      if (!key) return sorted;
      sorted.sort((a, b) => {
        let valA = a[key], valB = b[key];
        if (key === "balance") {
          valA = Number(valA);
          valB = Number(valB);
        } else if (key === "date") {
          valA = new Date(valA);
          valB = new Date(valB);
        } else {
          valA = valA.toString().toLowerCase();
          valB = valB.toString().toLowerCase();
        }
        if (valA < valB) return this.sortOrder === "asc" ? -1 : 1;
        if (valA > valB) return this.sortOrder === "asc" ? 1 : -1;
        return 0;
      });
      return sorted;
    }
  },
  methods: {
    logout() {
      this.$router.push({ path: '/' });
    },
    goToSOA(member) {
      this.$router.push(`/soa/${member.accountNumber}`);
    }
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
th, td {
  font-size: 15px;
}
.border-black {
  border: 1.5px solid #000 !important;
}
</style>