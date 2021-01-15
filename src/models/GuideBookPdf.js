import ActiveData from '@/models/ActiveData'
import GuideBookPdfApi from '@/services/oblyk-api/GuideBookPdfApi'

export default class GuideBookPdf extends ActiveData {
  find (id) {
    return this.apiFind(GuideBookPdfApi, id)
  }

  get url () {
    return `${process.env.VUE_APP_OBLYK_API_URL}${this.pdf_file}`
  }

  coverUrl () {
    return require('@/assets/svgs/pdf-guide-book-default.svg')
  }
}