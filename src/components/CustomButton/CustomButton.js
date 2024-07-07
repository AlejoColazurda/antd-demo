import React from 'react'
import {Button, Flex} from 'antd';
import './CustomButton.css';

const CustomButton = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-green-950'>
    <Flex gap="samll" align="flex-start" vertical className='flex flex-col gap-4'>
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
      <Flex gap='small'>
        <Button type='primary' href='https://ant.design/index-cn'>
          href Primary
        </Button>
        <Button type='primary' href='https://ant.design/index-cn' disabled>
        href Primary (disabled)
        </Button>
      </Flex>
      <Flex gap='small'>
        <Button danger> Danger default</Button>
        <Button danger disabled>
          Danger Default(disabled)
        </Button>
      </Flex>
      <Flex gap='small'>
        <Button danger type='text'>Danger Text</Button>
        <Button danger type='text' disabled>
          Danger Text (disabled)
        </Button>
      </Flex>
      <Flex gap='small' className='site-button-ghost-wrapper'>
        <Button ghost>Ghost</Button>
        <Button ghost disabled> Ghost (disabled)</Button>
      </Flex>
    </Flex>
    </div>
  );
};

export default CustomButton;