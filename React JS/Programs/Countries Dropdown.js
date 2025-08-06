Countries Dropdown & Datalist
=============================================

export default function ListDemo2() {
	const countries = ["Afghanistan","Albania","Algeria"]
  return <>
    <h2>Countries Dropdown</h2>
    Dropdown: 
    <select>
        {countries.map((country,ind)=>{
            return <option key={ind}>{country}</option>
        })}
    </select>
    <hr/>
    datalist:
    <input list="countries" name="country" id="country" />
    <datalist id="countries">
        {countries.map((country,ind)=>{
            return <option key={ind} value={country} />
        })}
    </datalist>
  </>
}
