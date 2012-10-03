# Compass
###############################################################################
require 'susy'

# Paths
###############################################################################
set :css_dir   , "public/stylesheets"
set :js_dir    , "public/javascripts"
set :images_dir, "public/images"
set :build_dir , "build/public"

# Livereload
###############################################################################
activate :livereload, :apply_js_live => true

# Helpers
###############################################################################
helpers do
  def timestamp
    Time.now.to_i
  end
  
  def server_name
    env['SERVER_NAME'] || 'localhost'
  end
  
  def body_page_classes
    path = request.path_info.dup
    path << settings.index_file if path.match(%r{/$})
    path = path.gsub(%r{^/}, '')

    classes = []
    parts = path.split('.')[0].split('/')
    parts.shift(1)
    parts.each_with_index { |path, i| 
      classes << parts.first(i+1).join('_') 
    }

    classes.join(' ')
  end
  
end

# Build-specific configuration
###############################################################################
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