<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h4>Neaz Morshed</h4>
      <nuxt-link to="/suadmin/addblog" class="btn btn-success">
        <i class="las la-plus"></i> Add Product
      </nuxt-link>
    </div>
    
    <div class="row">
      <div class="col-12">
        <table id="example" class="table table-striped" style="width: 100%">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd">
              <td>
                <div class="px-2">
                  <img src="https://via.placeholder.com/50" alt="Product" class="product-img" />
                </div>
              </td>
              <td>
                <div class="px-2"><span>1001</span></div>
              </td>
              <td>
                <div class="px-2"><span>Laptop Pro X</span></div>
              </td>
              <td>
                <div class="px-2"><span>Electronics</span></div>
              </td>
              <td>
                <div class="px-2"><span>TechBrand</span></div>
              </td>
              <td>
                <div class="px-2">
                  <span class="badge bg-success">Active</span>
                </div>
              </td>
              <td>
                <div class="d-flex gap-2 justify-content-center">
                  <button class="btn btn-sm btn-outline-primary" title="Edit">
                    <i class="las la-edit"></i>
                  </button>
                  <button class="btn btn-sm btn-outline-danger" title="Delete">
                    <i class="las la-trash"></i>
                  </button>
                </div>
              </td>
            </tr>

            <tr class="even">
              <td>
                <div class="px-2">
                  <img src="https://via.placeholder.com/50" alt="Product" class="product-img" />
                </div>
              </td>
              <td>
                <div class="px-2"><span>1002</span></div>
              </td>
              <td>
                <div class="px-2"><span>Wireless Mouse</span></div>
              </td>
              <td>
                <div class="px-2"><span>Accessories</span></div>
              </td>
              <td>
                <div class="px-2"><span>AccessoryCo</span></div>
              </td>
              <td>
                <div class="px-2">
                  <span class="badge bg-secondary">Inactive</span>
                </div>
              </td>
              <td>
                <div class="d-flex gap-2 justify-content-center">
                  <button class="btn btn-sm btn-outline-primary" title="Edit">
                    <i class="las la-edit"></i>
                  </button>
                  <button class="btn btn-sm btn-outline-danger" title="Delete">
                    <i class="las la-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.product-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
}

.badge {
  padding: 0.35em 0.65em;
  font-size: 0.875rem;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.gap-2 {
  gap: 0.5rem;
}
</style>