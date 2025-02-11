################################################################################################
#  BD de production                                                                            #
################################################################################################

resource "scaleway_rdb_instance" "prod_database" {
  name           = "test-rdb"
  node_type      = "DB-DEV-S"
  engine         = "PostgreSQL-15"
  is_ha_cluster  = true
  disable_backup = true
  user_name      = "my_initial_user"
  password       = "thiZ_is_v&ry_s3cret"
}

resource "scaleway_rdb_database" "prod_database_instance" {
  instance_id = scaleway_rdb_instance.prod_database.id
  name        = "my-new-database"
}