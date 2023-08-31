<script>
    export let data;
  
      $: currentPage = data.page;
      $: totalPages = data.total_pages;
  
  /*
  next_page
  page
  prev_page
  results_per_page
  results_size
  total_pages
  total_results_size
  */
  </script>
  
  <div class="pagination">
    <div class="pagination-pages">
    {currentPage}/{totalPages}
    </div>
      <div class="btn-group">
          <a class="btn" href="?page={currentPage - 1 <= 0 ? totalPages : currentPage - 1}">Prev</a>
          <a class="btn" href="?page={currentPage + 1 > totalPages ? '1' : currentPage + 1}">Next</a>
      </div>
  </div>
  
  <style>
  .pagination{
    text-align:center;
    padding:30px 0
  }
  .pagination-pages{
    padding:10px 0
  }
  .pagination .btn{
    margin:0 5px
  }
  </style>