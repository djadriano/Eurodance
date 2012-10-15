# ---------------------------------
# Paths
# ---------------------------------
set :css_dir   , "public/stylesheets"
set :js_dir    , "public/javascripts"
set :images_dir, "public/images"
set :build_dir , "build/public"

# ---------------------------------
# Livereload
# ---------------------------------
activate :livereload, :apply_js_live => true

# ---------------------------------
# Localization
# ---------------------------------
activate :i18n, :mount_at_root => false

# ---------------------------------
# Helpers
# ---------------------------------
helpers do
  def timestamp
    Time.now.to_i
  end

  def server_name
    env['SERVER_NAME'] || 'localhost'
  end

  # method for get stylesheets and javascripts of template
  def path_assets
    path     = request.path
    arr_path = path.split('.')[0].split('/')

    if arr_path.length == 1
      arr_path[0]
    elsif arr_path.length == 2
      arr_path[1]
    else
      arr_path[1] + '/' + arr_path[2]
    end
  end

end

# ---------------------------------
# Build-specific configuration
# ---------------------------------
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css
  
  # Minify Javascript on build
  activate :minify_javascript
  
  # Enable cache buster
  activate :cache_buster
  
  # Use relative URLs
  activate :relative_assets
  
  # Compress PNGs after build
  activate :smusher
end