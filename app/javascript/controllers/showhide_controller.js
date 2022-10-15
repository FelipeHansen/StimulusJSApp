import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="showhide"
export default class extends Controller {
  static targets = ["input", "output"]
  static values = { showIf: String }
  connect() {
    this.outputTarget.hidden = true
  }

  toggle() {
    console.log("heyeye")
    console.log(this.showIfValue)
    if (this.inputTarget.value != this.showIfValue) {
      this.outputTarget.hidden = true
    } else if (this.inputTarget.value == this.showIfValue) {
      this.outputTarget.hidden = false
    }
  }
}
