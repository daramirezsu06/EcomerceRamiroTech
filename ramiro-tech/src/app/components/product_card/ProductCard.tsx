import { ProductCardContainer, ProductImageContainer, ProductImage, ProductInfo, ProductTitle, ProductPrice, ProductCategory, ProductStock } from './ProductCard.styles'
import { categoriesToPreLoad } from '@/utils/preLoadData'
import { IProduct } from '@/app/types'
import Link from 'next/link'



const ProductCard : React.FC<IProduct> = ({ id, name, price, image, categoryId, stock }) :React.ReactElement => {
  return (
    <ProductCardContainer>
      <Link href={/products/${id}}>
      <ProductImageContainer>
        <ProductImage src={image} alt={name} />
      </ProductImageContainer>
      <ProductInfo>
        <ProductTitle>{name}</ProductTitle>
        <ProductPrice>${price}</ProductPrice>
        <ProductCategory>
          {categoriesToPreLoad[categoryId].name}
        </ProductCategory>
        <ProductStock>
          Available: {stock}
        </ProductStock>
      </ProductInfo>
      </Link>
      </ProductCardContainer>
  )
}

export default ProductCard