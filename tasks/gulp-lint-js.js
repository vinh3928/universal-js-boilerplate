import gulp       from 'gulp';
import eslint     from 'gulp-eslint';
import jscs       from 'gulp-jscs';
import config     from './cfg/gulp-config';

export default () => {
  return gulp
    .src(config.scripts.input)
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'))
    .pipe(eslint({configFile: '.eslintrc'}))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
};