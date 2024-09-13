import { defineStore } from 'pinia'

interface User {
  payload: {
    id: string
    email: string
    firstname: string
    lastname: string
  }
  accessToken: string
  refreshToken: string
}

export interface AdminUserState {
  id: string
  email: string
  firstname: string
  lastname: string
}

export interface CompanyUserState {
  id: string
  email: string
  firstname: string | null
  lastname: string | null
  role: string | null
  emailVerified: boolean | null
  companyId: string | null
  company: string | undefined
}

export interface CompanyState {
  id: string
  name: string
  phone: string
  email: string
  addressLabel: string
  street: string
  streetNumber: string
  postalCode: string
  city: string
  country: string
  subscriptionStatus?: string | null
  subscriptionUpdatedAt?: string | null
}

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    user: null as User | null,
    adminUsers: null as AdminUserState[] | null,
    companyUsers: null as CompanyUserState[] | null,
    companies: null as CompanyState[] | null,
  }),
  actions: {
    setUser(user: any) {
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },

    logout() {
      this.user = null
      localStorage.removeItem('user')
    },

    async refreshToken() {
      try {
        if (!this.user) return
        const nuxtApp = useNuxtApp()
        const config = nuxtApp.$config
        const apiUrl = config.public.API_GATEWAY_URL
        const response = await fetch(
          `${apiUrl}/auth/login-with-refresh-token`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              refreshToken: this.user?.refreshToken,
            }),
          }
        )
        if (!response.ok) {
          this.logout()
          return
        }
        const data = await response.json()

        this.setUser(data.data)
      } catch (error) {
        console.error(error)
        this.logout()
      }
    },

    async fetchAdminUsers() {
      const nuxtApp = useNuxtApp()
      const config = nuxtApp.$config
      const apiUrl = config.public.API_GATEWAY_URL
      const response = await fetch(`${apiUrl}/admin-users?limit=100&page=1`, {
        method: 'GET',
      })

      if (!response.ok) return

      const data = await response.json()
      this.adminUsers = data.data.data
    },

    async fetchCompanyUsers() {
      const nuxtApp = useNuxtApp()
      const config = nuxtApp.$config
      const apiUrl = config.public.API_GATEWAY_URL
      const response = await fetch(`${apiUrl}/company-users?limit=100&page=1`, {
        method: 'GET',
      })

      if (!response.ok) return

      const data = await response.json()
      this.companyUsers = data.data.data

      if (!this.companies) this.fetchCompanies()

      this.mapCompanyNameToCompanyUsers()
    },

    async fetchCompanies() {
      const nuxtApp = useNuxtApp()
      const config = nuxtApp.$config
      const apiUrl = config.public.API_GATEWAY_URL
      const response = await fetch(`${apiUrl}/companies?limit=100&page=1`, {
        method: 'GET',
      })

      if (!response.ok) return

      const data = await response.json()
      this.companies = data.data.data

      if (!this.companyUsers) this.fetchCompanyUsers()

      this.mapCompanyNameToCompanyUsers()
    },

    mapCompanyNameToCompanyUsers() {
      return this.companyUsers?.map((companyUser) => {
        if (this.companies) {
          companyUser.company = this.companies.find(
            (company) => company.id == companyUser.companyId
          )?.name
        }

        return companyUser
      })
    },

    countCompanies(isSub: boolean) {
      if (isSub)
        return this.companies?.filter(
          (company) => company.subscriptionStatus === 'ACTIVE' || company.subscriptionStatus === 'FREE_TRIAL'
        ).length

      return this.companies?.filter((company) => company.subscriptionStatus === 'EXPIRED' || company.subscriptionStatus === 'CANCELED')
        .length
    },
  },
})
