import withAuth from "../../hoc/withAuth"
import Input from "./Input"
import Output from "./Output"

function Translate() {
  return (
    <div className="">
      <Input />
      <Output />
    </div>
  )
}

export default withAuth(Translate)