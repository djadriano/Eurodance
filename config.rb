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
activate :i18n, :mount_at_root => :pt

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
    arr_classes = page_classes.split( ' ' )

    if arr_classes.length < 2

      arr_classes[ 0 ]

    else

      arr_section = arr_classes[ ( arr_classes.length - 1 ) ].split( '_' )
      asset_path  = ''

      arr_section.each_with_index do |lista, i|
        if i > 0
          if i == ( arr_section.length - 1 )
            asset_path = asset_path + lista
          else
            asset_path = asset_path + lista + '/'
          end
        end
      end

      asset_path

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

  # Use relative URLs
  activate :relative_assets

  # Compress PNGs after build
  activate :smusher
end