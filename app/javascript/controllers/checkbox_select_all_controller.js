import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="checkbox-select-all"
export default class extends Controller {
  static targets = ["parent", "child"]
  connect() {
    this.parentTarget.checked = false
    this.childTargets.map(x => x.checked = this.parentTarget.checked)
    // this.parentTarget.hidden = true
    // this.childTargets.map(x => x.hidden = true)
  }


  toggleChildren() {
    this.childTargets.map(x => x.checked = this.parentTarget.checked)
  }

  toggleParent() {
    if (this.childTargets.map(x => x.checked).includes(false)) {
      this.parentTarget.checked = false
    } else {
      this.parentTarget.checked = true
    }
    // console.log(this.childTargets.every(x => x.checked))
    // one line version: this.parentTarget.checked = this.childTargets.every(x => x.checked)
  }
}
