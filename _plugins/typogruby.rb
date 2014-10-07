require 'typogruby'
require 'maruku'

module Jekyll
  class MarkdownConverter < Jekyll::Converter
    def convert(content)
      Typogruby.improve(Maruku.new(content).to_html)
    end

    def matches(ext)
      ext
    end

    def output_ext(ext)
      ext
    end
  end
end