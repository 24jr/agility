<script>
  import Button from "$lib/components/Button/index.svelte"
  import Code from "$lib/components/type/Input/Code/index.svelte"
  import Date from "$lib/components/type/Input/Date/index.svelte"
  import Email from "$lib/components/type/Input/Email/index.svelte"
  import Url from "$lib/components/type/Input/Url/index.svelte"
  import ImageUrl from "$lib/components/type/Input/ImageUrl/index.svelte"
  import Int from "$lib/components/type/Input/Int/index.svelte"
  import Password from "$lib/components/type/Input/Password/index.svelte"
  import PhoneNumber from "$lib/components/type/Input/PhoneNumber/index.svelte"
  import Slider from "$lib/components/type/Input/Slider/index.svelte"
  import Toggle from "$lib/components/type/Input/Toggle/index.svelte"
  import Text from "$lib/components/type/Input/Text/index.svelte"
  import TextArea from "$lib/components/type/Input/TextArea/index.svelte"
  import TextArray from "$lib/components/type/Input/TextArray/index.svelte"
  import Dropdown from "$lib/components/type/Input/Dropdown/index.svelte"
  import ColorPicker from "$lib/components/type/Input/ColorPicker/index.svelte"
  import Modal from "$lib/components/Modal/index.svelte"

  function buttonTest(){
    console.log('button click')
  }

  let isDisabled = false

  let codeVal
  let isCodeStandardMet

  let dateVal
  let dateVal2

  let emailVal
  let isValidEmail

  let textVal

  let urlVal
  let isUrlValid

  let imageUrlVal
  let isImageUrlValid

  let intVal

  let passwordVal
  let isPasswordStandardMet

  let phoneNumberVal
  let isValidPhoneNumber

  let sliderVal

  let toggleVal

  let textAreaVal

  let textArrayVal

  let dropdownVal
  let dropdownVal2
  let dropdownOptions = [
    { key: 'one', name: 'One'},
    { key: 'two', name: 'Two'},
    { key: 'three', name: 'Three'},
    { key: 'four', name: 'Four'},
    { key: 'five', name: 'Five'},
    { key: 'six', name: 'Six'},
    { key: 'seven', name: 'Seven'},
    { key: 'eight', name: 'Eight'},
    { key: 'nine', name: 'Nine'},
    { key: 'ten', name: 'Ten'},
    { key: 'one1', name: 'One1'},
    { key: 'two1', name: 'Two1'},
    { key: 'three1', name: 'Three1'},
    { key: 'four1', name: 'Four1'},
    { key: 'five1', name: 'Five1'},
    { key: 'six1', name: 'Six1'},
    { key: 'seven1', name: 'Seven1'},
    { key: 'eight1', name: 'Eight1'},
    { key: 'nine1', name: 'Nine1'},
    { key: 'ten1', name: 'Ten1'},
  ]


  let hexVal
  let opacityVal 


  let showModal = false
  let showModal2 = false
</script>

<div class="grid">
  <div class="card cardtest">
    <Button
      on:click={buttonTest}
      type="color"
    >
      color
    </Button>
    <Button
      on:click={buttonTest}
      type="outlined"
    >
      outline
    </Button>
    <Button
      on:click={buttonTest}
      type="soft"
    >
      soft
    </Button>
    <Button
      on:click={buttonTest}
    >
      nothing
    </Button>
    isDisabled: {isDisabled}

    <div class="spacerVert spacerHoriz"/>

    <div>
      Code <br />
      codeVal: {codeVal} <br />
      isCodeStandardMet: {isCodeStandardMet} <br />
      <Code bind:val={codeVal} bind:isCodeStandardMet {isDisabled} />
    </div>

    <div class="spacerVert spacerHoriz"/>

    <div>
      Date <br />
      dateVal: {dateVal} <br />
      <Date bind:val={dateVal} {isDisabled} />
    </div>

    <div class="spacerVert spacerHoriz"/>

    <div>
      Date <br />
      dateVal: {dateVal} <br />
      dateVal2: {dateVal2} <br />
      <Date bind:val={dateVal} bind:val2={dateVal2} {isDisabled} isRange="true" />
    </div>

    <div class="spacerVert spacerHoriz"/>

    <div>
      Email <br />
      emailVal: {emailVal} <br />
      isValidEmail: {isValidEmail} <br />
      <Email bind:val={emailVal} bind:isValidEmail {isDisabled} />
    </div>

    <div class="spacerVert spacerHoriz"/>

    <div>
      Text <br />
      textVal: {textVal} <br />
      <Text bind:val={textVal} {isDisabled} />
    </div>

    <div class="spacerVert spacerHoriz"/>

    <div>
      Url <br />
      urlVal: {urlVal} <br />
      isUrlValid: {isUrlValid} <br />
      <Url bind:val={urlVal} bind:isValid={isUrlValid} {isDisabled} />
    </div>

    <div class="spacerVert spacerHoriz"/>

    <div>
      ImageUrl <br />
      imageUrlVal: {imageUrlVal} <br />
      isImageUrlValid: {isImageUrlValid} <br />
      <ImageUrl bind:val={imageUrlVal} bind:isValid={isImageUrlValid} {isDisabled} placeholder="image url" />
    </div>

    <div class="spacerVert spacerHoriz"/>

    <div>
      Int <br />
      intVal: {intVal} <br />
      <Int bind:val={intVal} {isDisabled} />
    </div>

    <div class="spacerVert spacerHoriz"/>

    <div>
      Password <br />
      passwordVal: {passwordVal} <br />
      isPasswordStandardMet: {isPasswordStandardMet} <br />
      <Password bind:val={passwordVal} bind:isPasswordStandardMet isTooltipUsed={true} {isDisabled} />
    </div>

    <div class="spacerVert spacerHoriz"/>

    <div>
      PhoneNumber <br />
      phoneNumberVal: {phoneNumberVal} <br />
      isValidPhoneNumber: {isValidPhoneNumber} <br />
      <PhoneNumber bind:val={phoneNumberVal} bind:isValid={isValidPhoneNumber} {isDisabled} />
    </div>

    <div class="spacerVert spacerHoriz"/>

    <div>
      Slider <br />
      sliderVal: {sliderVal} <br />
      <Slider bind:val={sliderVal} {isDisabled} />
    </div>

    <div class="spacerVert spacerHoriz"/>

    <div>
      Toggle <br />
      toggleVal: {toggleVal} <br />
      <Toggle bind:val={toggleVal} {isDisabled} />
    </div>

    <div class="spacerVert spacerHoriz"/>

    <div>
      TextArea <br />
      textAreaVal: {textAreaVal} <br />
      <TextArea bind:val={textAreaVal} {isDisabled} />
    </div>

    <div class="spacerVert spacerHoriz"/>

    <div>
      TextArray <br />
      textArrayVal: {textArrayVal} <br />
      <TextArray bind:val={textArrayVal} {isDisabled} />
    </div>

    <div class="spacerVert spacerHoriz"/>

    <div>
      Dropdown <br />
      dropdownVal: {dropdownVal} <br />
      <Dropdown bind:val={dropdownVal} options={dropdownOptions} {isDisabled} />
    </div> 
    
    <div class="spacerVert spacerHoriz"/>

    <div>
      Dropdown isMultiselect<br />
      dropdownVal2: {JSON.stringify(dropdownVal2)} <br />
      <Dropdown bind:val={dropdownVal2} isMultiselect="true" options={dropdownOptions} {isDisabled} />
    </div>
    
    <div class="spacerVert spacerHoriz"/>

    <div>
      ColorPicker<br />
      hexVal: {hexVal} <br />
      opacityVal: {opacityVal} <br />
      <ColorPicker bind:hex={hexVal} bind:opacity={opacityVal} {isDisabled} />
    </div>

    
    
  </div>
  <div class="card">
    other card
<div class="test">
  <Modal
    type={"dropdown"}
    minWidth={150}
    targetWidth={250}
    minHeight={200} 
    targetHeight={500}
    bind:isShown={showModal}
    {isDisabled}
  >
    <div slot="toggleButton" class="displayItemContainer" on:click|preventDefault>
      <div class="bumpns">
        modal1
      </div>
    </div>
    <div slot="modalContent" let:toggleModal>
      <div class="dropdownContainer">
        {#each dropdownOptions as option (option.key)}
          <Button
            type="soft"
            class="optionItem"
            isSelected={option.key === dropdownVal2 || (typeof dropdownVal2 === typeof [] && dropdownVal2.some(h => h === option.key))}
          >
            <p>{option.name}</p>
          </Button>
        {/each}
      </div>
    </div>
  </Modal>
</div>

  <Modal
    type={"dropdown"}
    minWidth={400}
    targetWidth={500}
    minHeight={200} 
    targetHeight={550}
    bind:isShown={showModal2}
    {isDisabled}
  >
    <div slot="toggleButton" class="displayItemContainer" on:click|preventDefault>
      <div class="bumpns">
        modal2
      </div>
    </div>
    <div slot="modalContent" let:toggleModal>
      <div class="dropdownContainer">
        {#each dropdownOptions as option (option.key)}
          <Button
            type="soft"
            class="optionItem"
            isSelected={option.key === dropdownVal2 || (typeof dropdownVal2 === typeof [] && dropdownVal2.some(h => h === option.key))}
          >
            <p>{option.name}</p>
          </Button>
        {/each}
      </div>
    </div>
  </Modal>
   
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(clamp(20%, 20rem, 100%), 1fr)
    );
    margin: .5rem;
    margin-bottom: 50rem;
  }
  .cardtest{
    min-height: 20rem;
  }
</style>