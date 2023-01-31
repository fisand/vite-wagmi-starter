import { Button, Form, Input, Select } from 'antd'

const About = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values)
  }

  return (
    <div className="max-w-3xl m-auto">
      <div className="py-8 px-4 flex flex-col gap-6">
        <div className="py-4 text-lg text-gray font-bold border-b">Form title</div>
        <Form size="large" onFinish={onFinish} layout="vertical" requiredMark={false}>
          <Form.Item name="Description" rules={[{ required: true }]} labelCol={{ span: 24, offset: 0 }}>
            <div>
              <div className="mb-2.5 text-black font-bold">1. Description</div>
              <Input className="h-11" />
            </div>
          </Form.Item>
          <Form.Item name="Rules" rules={[{ required: true }]}>
            <div>
              <div className="text-black font-bold">2. Rules</div>
              <NestInput />
            </div>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="mt-6 w-full h-11">
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default About

function NestInput({ onChange }: { onChange?: (res: string[], num: number) => void }) {
  const results = [2, 3, 4, 5]
  const [num, setNum] = useState(2)

  const [resultStrings, setResults] = useState<string[]>(Array(num).fill(''))

  useEffect(() => {
    if (num > resultStrings.length) {
      setResults((prev) => [...prev, ...Array(num - resultStrings.length).fill('')])
    } else if (num < resultStrings.length) {
      setResults((prev) => prev.slice(0, num))
    }
  }, [num, resultStrings])

  return (
    <div className="mt-2.5">
      <Select
        defaultValue={2}
        size="large"
        className="w-full h-11"
        onChange={(e) => {
          setNum(e)
        }}
      >
        {results.map((item, index) => (
          <Select.Option value={item} key={item + '_option'}>
            {item}
          </Select.Option>
        ))}
      </Select>
      <div className="relative pl-5">
        {Array(num)
          .fill(1)
          .map((_, index) => (
            <div className="mt-5 flex flex-col first:mt-5.25" key={index + '_input_result'}>
              <span className="pl-5 text-gray text-sm">Result{index + 1}</span>
              <div className="mt-2.5 flex-center">
                <span className="w-5 h-.25 bg-gray"></span>
                <Input
                  size="large"
                  className="h-11"
                  value={resultStrings[index]}
                  onChange={(e) => {
                    let _res = resultStrings.slice(0)
                    _res[index] = e.target.value.replaceAll(/(\#|\@|\$)/g, '')
                    setResults(_res)
                    onChange?.(_res, num)
                  }}
                  placeholder="Do not enter special characters (such as #@$)"
                ></Input>
              </div>
            </div>
          ))}
        <span className="block absolute top-0 -translate-y-5.5 h-full border-l border-l-solid border-gray"></span>
      </div>
    </div>
  )
}
