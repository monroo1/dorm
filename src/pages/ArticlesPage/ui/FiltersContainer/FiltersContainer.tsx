import { memo } from "react";
import { ArticlesFilters } from "@/widgets/ArticlesFilters";
import { useArticleFilters } from "../../lib/hooks/userArticleFilters";

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const {
        order,
        sort,
        type,
        search,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            order={order}
            sort={sort}
            type={type}
            search={search}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
            className={className}
        />
    );
});
