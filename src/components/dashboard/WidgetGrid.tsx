'use client'
import { IoCartOutline } from 'react-icons/io5'
import { SimpleWidget } from '..'
import { useAppSelector } from '@/store';

export const WidgetGrid = () => {
    
    const count = useAppSelector( state => state.counter.count );

    const simpleWidgetProps = {
        label: 'Cart',
        title: `${count}`,
        subTitle: 'Added items',
        icon: <IoCartOutline size={70} className='text-blue-600'/>,
        href: '/dashboard/counter'
    }

    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget {...simpleWidgetProps}/>
        </div>
    )
}
