import type { Ref } from 'vue'

import { ref } from 'vue'
import { defineStore } from 'pinia'

export type PdfUrls = {
  Colorado: string
  EvansBk: string
  JazzFake: string
  JazzLTD: string
  Library: string
  NewReal1: string
  NewReal2: string
  NewReal3: string
  Realbk1: string
  Realbk2: string
  Realbk3: string
  TheBook: string
}

export const usePdfUrlsStore = defineStore('pdfUrls', () => {
  const pdfUrls: Ref<PdfUrls> = ref({
    Colorado: '',
    EvansBk: '',
    JazzFake: '',
    JazzLTD: '',
    Library: '',
    NewReal1: '',
    NewReal2: '',
    NewReal3: '',
    Realbk1: '',
    Realbk2: '',
    Realbk3: '',
    TheBook: ''
  })

  const putPdfUrls = (newValue: any) => {
    pdfUrls.value = newValue
  }

  return { pdfUrls, putPdfUrls }
})
