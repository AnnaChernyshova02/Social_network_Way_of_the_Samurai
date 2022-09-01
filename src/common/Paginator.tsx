import React from 'react';
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import {useAppSelector} from "../Redux/redux-store";
import {pageSizeSelector, totalUsersCountSelector} from "../Selectors/usersSelector";

const Paginator = ({onPageChanged}: PaginatorType) => {

  const totalUsersCount = useAppSelector(totalUsersCountSelector)
  const pageSize = useAppSelector(pageSizeSelector)

  let pageCount = Math.ceil(totalUsersCount / pageSize)

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChanged(value)
  }

  return (
     <div>
       <Stack spacing={2} sx={{
         marginLeft: '25%',
         marginTop: '15px',
         marginBottom: '15px'
       }}>
         <Pagination count={pageCount}
                     onChange={changePage}
                     showFirstButton
                     showLastButton
                     color="secondary"/>
       </Stack>
     </div>
  );
};

export default Paginator;

type PaginatorType = {
  onPageChanged: (pageNumber: number) => void
}