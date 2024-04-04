
const useChangeListener = () => {

  const onChangeText = (e, getter, setter) => {
    
    const {name, value} = e.target

    setter({...getter, [name]: value})
  }

  const onChangeNumber = (e, getter, setter) => {
    const {name, value} = e.target

    setter({...getter, [name]: Math.abs(Number(value)).toString()})
  }

  return {onChangeText, onChangeNumber}
}

export default useChangeListener;