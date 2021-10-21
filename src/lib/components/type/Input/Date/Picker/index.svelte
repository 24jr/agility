<script>
  import { isDarkTheme } from "$lib/views/Layout/store";
  import Arrow from "$lib/assets/static/icons/Arrow/index.svelte"
  import Button from "$lib/components/Button/index.svelte"
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { onMount } from "svelte";

  export let val;
  export let val2
  export let displayVal = 'mm/dd/yyyy'
  export let displayVal2 = 'mm/dd/yyyy'
  export let isRange = false
  export let isDisabled = false;

  onMount(() => {
    if (val) {
      setPickerDate(val)
      displayVal = formatDate(JSON.parse(val));
    } else {
      let dNow = new Date(JSON.parse(Date.now()))
      let d = new Date(dNow.getFullYear(),dNow.getMonth(), 1)
      setPickerDate(d.getTime())
    }
  });

  function formatDate(date) {
    if (date) {
      const d = new Date(JSON.parse(date));
      const year = d.getFullYear();
      const month = ("0" + (d.getMonth() + 1)).slice(-2);
      const day = ("0" + d.getDate()).slice(-2);
      return [month, day,  year].join("/");
    } else {
      return "mm/dd/yyyy";
    }
  }

  let selDate
  let selYear
  let selMonth
  let selDay
  let selDate2
  let selYear2
  let selMonth2
  let selDay2

  let pickerDate
  let pickerYear
  let pickerMonth
  let pickerMonthDayOfWeek
  let pickerDaysInMonth
  let boxesInPicker
  const daysOfWeek = ['S','M','T','W','T','F','S']
  const monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  function setPickerDate(val){
    pickerDate = new Date(JSON.parse(val))
    pickerYear = pickerDate.getFullYear();
    pickerMonth = pickerDate.getMonth()
    pickerMonthDayOfWeek = new Date(pickerYear,pickerMonth,1).getDay()
    pickerDaysInMonth = new Date(pickerYear,pickerMonth+1,0).getDate();
    boxesInPicker = pickerDaysInMonth + pickerMonthDayOfWeek
  }

  function handleLeftYear(){
    pickerDate.setFullYear(pickerYear-1)
    setPickerDate(pickerDate.getTime())
  }
  function handleRightYear(){
    pickerDate.setFullYear(pickerYear+1)
    setPickerDate(pickerDate.getTime())
  }
  function handleLeftMonth(){
    if(pickerMonth < 1){
      pickerDate.setFullYear(pickerYear-1)
      pickerDate.setMonth(11)
    } else {
      pickerDate.setMonth(pickerMonth-1)
    }
    setPickerDate(pickerDate.getTime())
  }
  function handleRightMonth(){
    if(pickerMonth > 10){
      pickerDate.setFullYear(pickerYear+1)
      pickerDate.setMonth(0)
    } else {
      pickerDate.setMonth(pickerMonth+1)
    }
    setPickerDate(pickerDate.getTime())
  }

  function setDate(year, month, day){
    if(year && month && day){
      selDate = new Date(year, month, day)
      selYear = pickerYear
      selMonth = pickerMonth
      selDay = day
      val = selDate.getTime()
    } else {
      selDate = null
      selYear = null
      selMonth = null
      selDay = null
      val = null
    }
    displayVal = formatDate(val)
  }

  function setDate2(year, month, day){
    if(year && month && day){
      selDate2 = new Date(year, month, day)
      selYear2 = pickerYear
      selMonth2 = pickerMonth
      selDay2 = day
      val2 = selDate2.getTime()
    } else {
      selDate2 = null
      selYear2 = null
      selMonth2 = null
      selDay2 = null
      val2 = null
    }
    displayVal2 = formatDate(val2)
  }

  function correctRangeOrder(){
    if(selDate && selDate2 && selDate > selDate2){
      const locSelYear = selYear
      const locSelMonth = selMonth
      const locSelDay = selDay
      setDate(selYear2, selMonth2, selDay2)
      setDate2(locSelYear, locSelMonth, locSelDay)
    }
  }

  function handleDayClick(pickerDay){
    if(isRange){
      if(selDate){
        if(pickerYear === selYear && pickerMonth === selMonth && pickerDay === selDay){
          setDate()
        } else if(pickerYear === selYear2 && pickerMonth === selMonth2 && pickerDay === selDay2) {
          setDate2()
        } else {
          setDate2(pickerYear, pickerMonth, pickerDay)
          dispatch("select")
        }
      } else if(selDate2){
        if(pickerYear === selYear2 && pickerMonth === selMonth2 && pickerDay === selDay2){
          setDate2()
        } else {
          setDate(pickerYear, pickerMonth, pickerDay)
          dispatch("select")
        }
      } else {
        setDate(pickerYear, pickerMonth, pickerDay)
      }
      correctRangeOrder()
    } else {
      setDate(pickerYear, pickerMonth, pickerDay)
      dispatch("select")
    }
  }

</script>

<div class="container">
  <div class="selectBox">
    <Button mt="0" mb="0" py=".4" px=".8" minHeight="0" type="soft" isCompressed="true" {isDisabled} on:click={handleLeftYear}>
      <Arrow direction="left" color="var(--contrast-soft)" />
    </Button>
    <h3 class="monthYearText" class:isDisabled>{pickerYear}</h3>
    <Button mt="0" mb="0" py=".4" px=".8" minHeight="0" type="soft" isCompressed="true" {isDisabled} on:click={handleRightYear}>
      <Arrow direction="right" color="var(--contrast-soft)" />
    </Button>
  </div>
  <div class="selectBox">
    <Button mt="0" mb="0" py=".4" px=".8" minHeight="0" type="soft" isCompressed="true" {isDisabled} on:click={handleLeftMonth}>
      <Arrow direction="left" color="var(--contrast-soft)" />
    </Button>
    <h3 class="monthYearText" class:isDisabled>{monthName[pickerMonth]}</h3>
    <Button mt="0" mb="0" py=".4" px=".8" minHeight="0" type="soft" isCompressed="true" {isDisabled} on:click={handleRightMonth}>
      <Arrow direction="right" color="var(--contrast-soft)" />
    </Button>
  </div>
  <div class="daysOfWeek" class:isDisabled>
    {#each daysOfWeek as dayOfWeek}
      <div >{dayOfWeek}</div>
    {/each}
  </div>
  {#if boxesInPicker}
    <div class="dayGrid">
      {#each {length: boxesInPicker} as _, i}
        {#if i >= pickerMonthDayOfWeek}
          <Button
            mt=".1"
            mb=".1"
            ml=".1"
            mr=".1"
            py=".4"
            minHeight="0"
            isHalfSelected={selDate && selDate2 && selDate < new Date(pickerYear,pickerMonth, (i-pickerMonthDayOfWeek + 1)) && new Date(pickerYear,pickerMonth, (i-pickerMonthDayOfWeek + 1)) < selDate2}
            isSelected={(selDate && selYear === pickerYear && selMonth === pickerMonth && (i-pickerMonthDayOfWeek + 1) === selDay) || (selDate2 && selYear2 === pickerYear && selMonth2 === pickerMonth && (i-pickerMonthDayOfWeek + 1) === selDay2)}
            type="soft"
            {isDisabled}
            on:click={() => handleDayClick(i-pickerMonthDayOfWeek + 1)}
          >
            {i-pickerMonthDayOfWeek + 1}
          </Button>
        {:else}
          <div/>
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style>
  .container{
    width: 20rem;
  }
  .selectBox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  .monthYearText{
    font-weight: 500;
    margin: 0;
    padding: 0;
  }
  .daysOfWeek{
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    border: 1px solid var(--contrast-med);
    box-sizing: border-box;
    border-radius: .5rem;
    margin: .5rem;
  }
  .dayGrid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    margin: .5rem;
  }
  .isDisabled {
    color: var(--contrast-soft);
  }
</style>
