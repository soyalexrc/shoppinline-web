import { Table } from '@components/ui/table';
import Input from '@components/ui/form/input';
import { useState } from 'react';
import Pagination from '@components/ui/pagination';
import ActionsButton from '@components/ui/action-button';
import {TotalPrice, TotalPriceItem} from '@components/order/price';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';

export const CreatedAt: React.FC<{ createdAt?: string }> = ({ createdAt }) => {
  dayjs.extend(relativeTime);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  return (
    <span className="whitespace-nowrap">
      {dayjs.utc(createdAt).tz(dayjs.tz.guess()).fromNow()}
    </span>
  );
};

type Item = {
    price: number;
    name: string;
    quantity: number;
    image: {
        thumbnail: string;
    };
    status: {
      name: string;
      color: string
    }
}

export const Status: React.FC<{ item?: Item }> = ({ item }) => {
  return (
    <span className={item?.status?.name?.replace(/\s/g, '_').toLowerCase()}>
      <span
        className="bullet"
        style={{ backgroundColor: item?.status?.color }}
      />
      {item?.status?.name}
    </span>
  );
};

const columns = [
  {
    title: 'Order Number',
    dataIndex: 'tracking_number',
    key: 'tracking_number',
    className: 'id-cell',
    width: 140,
  },
  {
    title: 'Order Date',
    dataIndex: 'created_at',
    key: 'created_at',
    width: 140,
    render: function createdAt(items: string) {
      return <CreatedAt createdAt={items} />;
    },
  },
  {
    title: 'Status',
    key: 'status',
    width: 145,
    render: function status(item: Item) {
      return <Status item={item} />;
    },
  },
  {
    title: 'Delivery Time',
    dataIndex: 'delivery_time',
    key: 'delivery_time',
    width: 140,
  },
  {
    title: 'Total Price',
    key: 'total',
    width: 130,
    render: function totalPrice(items: TotalPriceItem) {
      return <TotalPrice items={items} />;
    },
  },
  {
    dataIndex: '',
    key: 'operations',
    width: 80,
    render: function actionsButton(item: unknown) {
      return <ActionsButton item={item} />;
    },
    className: 'operations-cell',
  },
];

type Order = {
    tracking_number: string;
    created_at: string;
    delivery_time: string;
    products: Item[];
}

const OrderTable: React.FC<{ orders?: Order[]; lang: string }> = ({
  orders,
  lang,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState('');
  const countPerPage = 5;
  const [filterData, setDataValue] = useState(orders.slice(0, countPerPage));

  const updatePage = (p: number) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setDataValue(orders.slice(from, to));
  };

  const onChangeSearch = (e: { target: { value: string } }) => {
    setCurrentPage(1);
    const filter = orders
      .filter((item) =>
        item.tracking_number
          .toLowerCase()
          .includes(e.target.value.toLowerCase()),
      )
      .slice(0, countPerPage);
    setValue(e.target.value);
    if (!e.target.value) {
      updatePage(1);
    }
    setDataValue(filter);
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="items-center mb-5 md:flex md:justify-between sm:mb-10">
        <h2 className="mb-4 text-sm font-semibold md:text-xl text-brand-dark md:mb-0">
          My order list
        </h2>
        <form onSubmit={onSubmitHandle} className="relative">
          <span className="absolute ltr:right-3 rtl:left-3 top-[80%] transform -translate-y-1/2 order-icon-color">
            <BsSearch size={19} />
          </span>
          <Input
            name="search"
            type="search"
            value={value}
            onChange={onChangeSearch}
            placeholder="Search Order list"
            inputClassName=" h-[46px] w-full bg-white border border-[#E3E8EC] rounded-md order-search focus:border-2 focus:outline-none focus:border-brand focus:text-brand-muted"
            lang={lang}
          />
        </form>
      </div>
      <div className="order-list-table-wraper">
        <Table
          className="order-list-table"
          columns={columns}
          data={filterData}
          rowKey="id"
        />
      </div>
      {!value.trim() && (
        <div className="mt-5 ltr:text-right rtl:text-left">
          <Pagination
            current={currentPage}
            onChange={updatePage}
            pageSize={countPerPage}
            total={orders?.length}
            prevIcon={<GrPrevious size={12} style={{ color: '#090B17' }} />}
            nextIcon={<GrNext size={12} style={{ color: '#090B17' }} />}
            className="order-table-pagination"
          />
        </div>
      )}
    </>
  );
};

export default OrderTable;
