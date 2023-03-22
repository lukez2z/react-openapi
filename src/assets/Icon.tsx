import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const Certificate = () => (
    <svg
        viewBox="0 0 1024 1024"
        width="1em"
        height="1em"
        fill="currentColor"
    >
        <path
            d="M213.333 298.667A42.667 42.667 0 0 1 256 256h512a42.667 42.667 0 1 1 0 85.333H256a42.667 42.667 0 0 1-42.667-42.666zM256 405.333a42.667 42.667 0 0 0 0 85.334h128a42.667 42.667 0 1 0 0-85.334H256zm-42.667 192A42.667 42.667 0 0 1 256 554.667h85.333a42.667 42.667 0 1 1 0 85.333H256a42.667 42.667 0 0 1-42.667-42.667z"
            fillOpacity={0.85}
        />
        <path
            d="M42.667 170.667A85.333 85.333 0 0 1 128 85.333h768a85.333 85.333 0 0 1 85.333 85.334v554.666A85.333 85.333 0 0 1 896 810.667H768V896a42.667 42.667 0 0 1-61.739 38.187L640 901.035l-66.261 33.152A42.667 42.667 0 0 1 512 896v-85.333H128a85.333 85.333 0 0 1-85.333-85.334V170.667zM768 725.333h128V170.667H128v554.666h384v-36.437a170.667 170.667 0 1 1 256 0v36.437z"
            fillOpacity={0.85}
        />
    </svg>);
export const CertificateIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={Certificate} {...props} />
);

