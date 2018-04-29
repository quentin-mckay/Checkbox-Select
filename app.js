$checkboxes = document.querySelectorAll('.inbox__checkbox')
$names = document.querySelectorAll('.inbox__item-name')


let lastChecked


function handleCheck(e) {
    
    let inBetween = false

    // check if shiftkey down AND checking the box
    if (e.shiftKey && this.checked) {
        
        $checkboxes.forEach(checkbox => {

            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween  // switch it on
            }

            if (inBetween) {
                checkbox.checked = true
            }
        })

    }

    lastChecked = this  // this === e.target
}
    

$checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck)
})