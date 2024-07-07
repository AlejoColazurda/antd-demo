import React from 'react'

const buttons = () => {
  return (
    <Flex gap="samll" align="flex-start" vertical>
      <Flex gap="samll">
        <Button type='primary'>Primary</Button>
        <Button type='primary' disabled>
          Primary(disabled)
        </Button>
      </Flex>
      <Flex gap='small'>
        <Button type='dashed'>Dashed</Button>
        <Button type='dashed' disabled>
          Dashed(disabled)
        </Button>
      </Flex>
      <Flex gap='small'>
        <Button type='link'>Link</Button>
        <Button type='link' disabled>
          Link(disabled)
        </Button>
      </Flex>
      
    </Flex>
  )
}

export default buttons;